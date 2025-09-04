// Firebase configuration - Secure implementation
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebase config - Client-side credentials (safe to expose)
const firebaseConfig = {
    apiKey: "AIzaSyABrTpV_0WPb1zKF9zaemGWzwP4rHeS2e4",
    authDomain: "portfoliodb-e5f5e.firebaseapp.com",
    projectId: "portfoliodb-e5f5e",
    storageBucket: "portfoliodb-e5f5e.firebasestorage.app",
    messagingSenderId: "989773546286",
    appId: "1:989773546286:web:81fa8ebbb673ad6b35f0bf",
    measurementId: "G-QB350TQ5RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Secure Firebase operations with error handling
class FirebaseService {
    constructor() {
        this.db = db;
        this.isInitialized = true;
    }

    async saveContact(contactData) {
        try {
            // Sanitize input
            const sanitizedData = this.sanitizeInput(contactData);
            await addDoc(collection(this.db, "contacts"), {
                ...sanitizedData,
                timestamp: new Date().toISOString()
            });
            return { success: true };
        } catch (error) {
            console.error("Error saving contact:", error);
            return { success: false, error: error.message };
        }
    }

    async saveQuizProgress(progressData) {
        try {
            // Sanitize and validate input
            const sanitizedData = this.sanitizeInput(progressData);
            if (!this.validateQuizData(sanitizedData)) {
                throw new Error("Invalid quiz data");
            }
            
            await addDoc(collection(this.db, "quizProgress"), {
                ...sanitizedData,
                timestamp: new Date().toISOString()
            });
            
            return { success: true };
        } catch (error) {
            console.error("Error saving quiz progress:", error);
            return { success: false, error: error.message };
        }
    }

    async getUserProgress(username) {
        try {
            const sanitizedUsername = this.sanitizeString(username);
            const q = query(
                collection(this.db, "quizProgress"), 
                where("username", "==", sanitizedUsername)
            );
            const querySnapshot = await getDocs(q);
            
            const userProgress = {};
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (!userProgress[data.topic] || userProgress[data.topic].score < data.score) {
                    userProgress[data.topic] = data;
                }
            });
            
            return { success: true, data: userProgress };
        } catch (error) {
            console.error("Error loading progress:", error);
            return { success: false, error: error.message };
        }
    }

    sanitizeInput(data) {
        const sanitized = {};
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'string') {
                sanitized[key] = this.sanitizeString(value);
            } else if (typeof value === 'number') {
                sanitized[key] = isNaN(value) ? 0 : value;
            } else {
                sanitized[key] = value;
            }
        }
        return sanitized;
    }

    sanitizeString(str) {
        if (typeof str !== 'string') return '';
        return str.replace(/[<>\"'&]/g, (match) => {
            const escapeMap = {
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '&': '&amp;'
            };
            return escapeMap[match];
        }).substring(0, 1000); // Limit length
    }

    validateQuizData(data) {
        return data.username && 
               data.topic && 
               typeof data.score === 'number' && 
               data.score >= 0 && 
               data.score <= 100;
    }
}

// Make Firebase service globally available
window.firebaseService = new FirebaseService();

console.log("Firebase initialized securely!");