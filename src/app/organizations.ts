// Organization and activity documentation retained from the local portfolio assets.
// Add verified roles and dates here when updating your experience.
type Organization = {
  title: string;
  category: string;
  image: string | null;
  document: string | null;
  role?: string;
  period?: string;
  contributions?: string[];
};
export const organizations: Organization[] = [
  {
    title: 'Information Systems Student Association (HIMSI)',
    category: 'Student association',
    role: 'Member',
    period: 'January 2025 - Present',
    contributions: [
      'Participated in planning and executing educational programs for Information Systems students.',
      'Involved in technology socialization activities (Makey Makey, Edison Robot) for elementary school students, introducing interactive tech.',
    ],
    image: '/images/organizations/himsi.jpeg',
    document: null,
  },
  {
    role: 'Leader',
    period: 'August 2025 – August 2026',
    contributions: [
      "Coordinated club activities and supervised weekly English practice sessions to improve members' speaking, writing, and presentation skills.",
      "Designed learning programs, workshops, and collaborative activities to enhance students' English proficiency and confidence.",
      'Led internal meetings, delegated tasks, and ensured effective execution of club events and competitions.',
    ],
    title: 'Del English Club', category: 'Community & language', image: '/images/organizations/del-english-club.jpeg', document: '/docs/organizations/del-english-club.pdf' },
  { title: 'Bebras Challenge 2025 - IT Del', role: 'Member', period: 'November 2025 (1 month)', contributions: ['Contributed to the organizing team of Bebras Challenge 2025 at Institut Teknologi Del, an educational initiative focused on computational thinking for school students.', 'Promoted Bebras Challenge to schools around Institut Teknologi Del to introduce the initiative and encourage student participation.'], category: 'Computational thinking', image: '/images/organizations/bebras-challenge-2025-it-del.jpeg', document: '/docs/organizations/bebras-challenge-2025-it-del.pdf' },
  {
    role: 'Head of Public Engagement Division',
    period: 'March 2025 - April 2025',
    contributions: [
      'Led external communication, participant coordination, and outreach to prospective students.',
      'Oversaw event information dissemination across social media and offline channels to increase participant engagement.',
      'Coordinated with schools, committees, and volunteers to ensure smooth registration and event execution.',
    ],
    title: 'Try Out Pre-UTBK', category: 'Educational activities', image: '/images/organizations/try-out-pre-utbk.jpeg', document: '/docs/organizations/try-out-pre-utbk.pdf' },
  {
    role: 'Chief Organizer',
    period: 'March 2026 - May 2026',
    contributions: [
      'Led the end-to-end execution of Del Debate Championship 2026, a campus-level debate competition following NUDC standards with 30 participants.',
      'Coordinated consumption, equipment, administration, documentation, and MC committees to ensure smooth event operations.',
      'Managed event planning, scheduling, participant registration, venue preparation, and judge coordination across competition days.',
    ],
    title: 'Del Debate Championship', category: 'Debate & communication', image: '/images/organizations/del-debate-championship.jpeg', document: null },
];
