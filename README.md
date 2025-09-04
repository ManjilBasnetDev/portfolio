# Manjil Basnet - Portfolio Website

A modern, responsive portfolio website with interactive Python quiz functionality.

## Features

- **Responsive Design**: Works on all devices
- **Interactive Quiz System**: Python learning quizzes with progress tracking
- **Secure Implementation**: Input sanitization and XSS protection
- **Performance Optimized**: Lazy loading and efficient DOM manipulation
- **Firebase Integration**: Real-time data storage for quiz progress and contacts

## File Structure

```
portfolio/
├── index.html          # Main portfolio page
├── quiz.html           # Separate quiz page
├── style.css           # Complete styling
├── script.js           # Main portfolio functionality
├── quiz.js             # Quiz functionality
├── quiz-data.js        # Quiz questions and data
├── firebase-config.js  # Secure Firebase configuration
├── project1.html       # Project detail page
└── assets/             # Images and media files
```

## Security Features

- **Input Sanitization**: All user inputs are sanitized to prevent XSS attacks
- **Firebase Security**: Secure Firebase operations with error handling
- **Environment Variables**: Configuration separated from code
- **Content Security**: HTML entities encoding for safe content display

## Setup Instructions

1. **Clone the repository**
2. **Configure Firebase**:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration values
   - Update `firebase-config.js` with environment variables
3. **Deploy to web server**

## Performance Optimizations

- **Modular Code**: Separated concerns into different files
- **Lazy Loading**: Quiz data loaded only when needed
- **Efficient DOM**: Minimal DOM manipulation and reflows
- **Optimized Images**: Proper image sizing and formats

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit Firebase keys to version control**
2. **Use environment variables for sensitive data**
3. **Implement proper Firebase security rules**
4. **Regularly update dependencies**
5. **Use HTTPS in production**

## Development

For local development:
1. Use a local web server (not file:// protocol)
2. Configure Firebase for localhost
3. Test all security features

## License

© 2025 Manjil Basnet. All rights reserved.