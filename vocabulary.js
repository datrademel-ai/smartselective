// SmartSelective Vocabulary - Main Logic
// Handles Flashcards, Quiz, and Progress Tracking

// State Management
let currentCardIndex = 0;
let currentStreak = 0;
let masteredWords = [];
let reviewWords = [];
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let isCardFlipped = false;

// LocalStorage Keys
const STORAGE_KEY = 'smartselective_vocab_progress';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateProgressDisplay();
});

// Progress Management
function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const data = JSON.parse(saved);
        masteredWords = data.masteredWords || [];
        reviewWords = data.reviewWords || [];
        currentStreak = data.streak || 0;
        
        // Check if last study was today
        const lastStudy = data.lastStudyDate;
        const today = new Date().toDateString();
        if (lastStudy !== today) {
            // Reset streak if not studied today
            if (lastStudy) {
                const lastDate = new Date(lastStudy);
                const daysDiff = Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24));
                if (daysDiff > 1) {
                    currentStreak = 0;
                }
            }
        }
    }
}

function saveProgress() {
    const data = {
        masteredWords: masteredWords,
        reviewWords: reviewWords,
        streak: currentStreak,
        lastStudyDate: new Date().toDateString(),
        weekNumber: getCurrentWeek()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function updateProgressDisplay() {
    const totalStudied = new Set([...masteredWords, ...reviewWords]).size;
    document.getElementById('total-studied').textContent = totalStudied;
    document.getElementById('mastered-count').textContent = masteredWords.length;
    document.getElementById('streak-count').textContent = currentStreak;
}

// Mode Selection
function startFlashcards() {
    document.getElementById('mode-selection').classList.add('hidden');
    document.getElementById('flashcard-mode').classList.remove('hidden');
    currentCardIndex = 0;
    loadCard();
}

function startQuiz() {
    document.getElementById('mode-selection').classList.add('hidden');
    document.getElementById('quiz-mode').classList.remove('hidden');
    generateQuiz();
}

function exitMode() {
    document.getElementById('flashcard-mode').classList.add('hidden');
    document.getElementById('quiz-mode').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('mode-selection').classList.remove('hidden');
    saveProgress();
    updateProgressDisplay();
}

// Flashcard Functions
function loadCard() {
    const words = getAllWords();
    if (currentCardIndex >= words.length) {
        currentCardIndex = 0;
    }
    
    const word = words[currentCardIndex];
    isCardFlipped = false;
    
    // Update UI
    document.getElementById('word-term').textContent = word.word;
    document.getElementById('word-type').textContent = word.type;
    document.getElementById('word-level').textContent = `Level: ${word.level}`;
    document.getElementById('word-definition').textContent = word.definition;
    
    // Update counter
    document.getElementById('card-counter').textContent = `${currentCardIndex + 1} / ${words.length}`;
    
    // Update progress bar
    const progress = ((currentCardIndex + 1) / words.length) * 100;
    document.getElementById('card-progress').style.width = `${progress}%`;
    
    // Update streak
    document.getElementById('card-streak').textContent = currentStreak;
    
    // Reset card flip
    document.getElementById('flashcard').classList.remove('flipped');
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentCardIndex === 0;
    document.getElementById('next-btn').disabled = currentCardIndex === words.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
    isCardFlipped = !isCardFlipped;
}

function markAsKnown() {
    const words = getAllWords();
    const wordId = words[currentCardIndex].id;
    
    if (!masteredWords.includes(wordId)) {
        masteredWords.push(wordId);
        currentStreak++;
    }
    
    // Remove from review if it was there
    reviewWords = reviewWords.filter(id => id !== wordId);
    
    saveProgress();
    nextCard();
}

function markForReview() {
    const words = getAllWords();
    const wordId = words[currentCardIndex].id;
    
    if (!reviewWords.includes(wordId)) {
        reviewWords.push(wordId);
    }
    
    currentStreak = 0; // Reset streak on review
    saveProgress();
    nextCard();
}

function nextCard() {
    const words = getAllWords();
    if (currentCardIndex < words.length - 1) {
        currentCardIndex++;
        loadCard();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadCard();
    }
}

// Quiz Functions
function generateQuiz() {
    quizQuestions = getRandomWords(10);
    currentQuizIndex = 0;
    quizScore = 0;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        showQuizResult();
        return;
    }
    
    const question = quizQuestions[currentQuizIndex];
    const allWords = getAllWords();
    
    // Generate wrong answers
    const wrongAnswers = allWords
        .filter(w => w.id !== question.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    // Combine and shuffle
    const options = [question, ...wrongAnswers].sort(() => 0.5 - Math.random());
    
    // Build HTML
    const container = document.getElementById('quiz-question-container');
    container.innerHTML = `
        <div class="quiz-question">
            <div class="question-text">What does "${question.word}" mean?</div>
            <div class="answer-options">
                ${options.map((opt, idx) => `
                    <div class="answer-option" onclick="selectAnswer(${opt.id}, ${question.id})">
                        <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
                        <div class="option-text">${opt.definition}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Update counter
    document.getElementById('quiz-counter').textContent = currentQuizIndex + 1;
    
    // Update progress bar
    const progress = ((currentQuizIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
}

function selectAnswer(selectedId, correctId) {
    const isCorrect = selectedId === correctId;
    
    if (isCorrect) {
        quizScore++;
        currentStreak++;
    } else {
        currentStreak = 0;
    }
    
    // Visual feedback
    const options = document.querySelectorAll('.answer-option');
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
        const optionId = parseInt(opt.getAttribute('onclick').match(/\d+/)[0]);
        if (optionId === correctId) {
            opt.classList.add('correct');
        } else if (optionId === selectedId) {
            opt.classList.add('incorrect');
        }
    });
    
    // Move to next question after 1.5s
    setTimeout(() => {
        currentQuizIndex++;
        showQuizQuestion();
    }, 1500);
}

function showQuizResult() {
    document.getElementById('quiz-mode').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    
    const percentage = (quizScore / quizQuestions.length) * 100;
    
    // Update result display
    document.getElementById('result-score').textContent = `${quizScore}/${quizQuestions.length}`;
    
    let icon, message;
    if (percentage >= 90) {
        icon = '🎉';
        message = 'Outstanding! You\'re mastering these words!';
    } else if (percentage >= 70) {
        icon = '👏';
        message = 'Great job! Keep up the good work!';
    } else if (percentage >= 50) {
        icon = '👍';
        message = 'Good effort! Review and try again!';
    } else {
        icon = '💪';
        message = 'Keep practicing! You\'ll get there!';
    }
    
    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-message').textContent = message;
    
    saveProgress();
}

// Mobile Swipe Support (optional enhancement)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const card = document.getElementById('flashcard');
    if (!card || card.classList.contains('hidden')) return;
    
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - mark for review
            if (isCardFlipped) markForReview();
        } else {
            // Swipe right - mark as known
            if (isCardFlipped) markAsKnown();
        }
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
    const flashcardMode = !document.getElementById('flashcard-mode').classList.contains('hidden');
    
    if (flashcardMode) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flipCard();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (isCardFlipped) markAsKnown();
            else nextCard();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (isCardFlipped) markForReview();
            else previousCard();
        }
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('mobile-active');
}
