const fs = require('fs');
let content = fs.readFileSync('src/components/Projects.jsx', 'utf8');
const imageMap = {
  'AI Business Engine': '/proj-ai-business.png',
  'Mzansi AgriAI': '/proj-agri-ai.png',
  'EskomSense AI': '/proj-eskom.png',
  'NoShowIQ': '/proj-noshowiq.png',
  'Sumbandila': '/proj-sumbandila.png',
  'Kirov Dynamics': '/proj-kirov.png',
  'DevForge AI': '/proj-kirov.png',
  'AI Job Market Intelligence': '/proj-ai-business.png',
  'CyberShield Modern': '/proj-sumbandila.png',
  'SupportHive-C': '/proj-noshowiq.png',
  'Kirov Connect': '/proj-kirov.png',
  'RepoPulse': '/proj-noshowiq.png',
  'Autonomous Dev Factory': '/proj-ai-business.png',
  'Gauteng Transport Dashboard': '/proj-noshowiq.png',
  'Townships Market AI': '/proj-ai-business.png',
  'SA Language AI': '/proj-kirov.png',
  'WaterWatch SA': '/proj-eskom.png',
  'YouthCode ZA': '/proj-kirov.png',
  'Titanic ML (Kaggle)': '/proj-noshowiq.png',
  'ETL Pipeline Suite': '/proj-noshowiq.png'
};

content = content.replace(/title:\s*"([^"]+)"([^}]+?)\n\s*}/g, (match, title, rest) => {
  const img = imageMap[title] || '/proj-kirov.png';
  if (rest.includes('image:')) return match;
  return `title: "${title}"${rest},\n    image: "${img}"\n  }`;
});

fs.writeFileSync('src/components/Projects.jsx', content);
