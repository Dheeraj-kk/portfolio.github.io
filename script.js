
// Add event listeners to make buttons responsive
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('ul');
  
  buttons.forEach(button => {
    // Add hover effect
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.05)';
      button.style.transition = 'transform 0.2s';
    });

    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });

    // Add click effect
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
  });
});  

// Add event listener for send message button