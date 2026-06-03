export const metadata = {
  title: "Kirti Jadhav Portfolio",

  description:
    "Data Analytics, Machine Learning, Power BI and Software Development Portfolio",

  keywords: [
    "Data Analytics",
    "Machine Learning",
    "Power BI",
    "Python",
    "SQL",
    "Data Science",
    "Software Development"
  ],

  authors: [
    {
      name: "Kirti Jadhav"
    }
  ]
};

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0a1628]">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}