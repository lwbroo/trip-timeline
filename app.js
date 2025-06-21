const data = [
  { date: '2025-06-25', event: 'Arrive in LA – Hilton Check-In' },
  { date: '2025-06-26', event: 'MJ ONE Show at 6:30PM' },
  { date: '2025-06-27', event: 'The Sphere Experience at 7:30PM' },
  { date: '2025-06-29', event: 'Flight to Orlando via Columbus' },
  { date: '2025-07-01', event: 'Disney Epcot VIP Tour 1:30PM' },
  { date: '2025-07-06', event: 'Universal Studios VIP Tour 9:30AM' }
];

const timeline = document.getElementById('timeline');
data.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.innerHTML = `<strong>${item.date}</strong>: ${item.event}`;
  timeline.appendChild(div);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('✅ Service Worker Registered'))
    .catch(err => console.log('❌ SW registration failed:', err));
}
