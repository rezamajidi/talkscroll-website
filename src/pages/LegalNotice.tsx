import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalNotice = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Legal Notice
          </h1>

          <ul className="text-gray-700 leading-relaxed mb-8">
            <li>Reza Majidi</li>
            <li>Marlene-Dietrich-Platz 3</li>
            <li>10785 Berlin</li>
            <li>Germany</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>

          <ul className="text-gray-700 leading-relaxed mb-8">
            <li>
              Email:{" "}
              <a href="mailto:rezamajidi.dev@gmail.com">
                rezamajidi.dev@gmail.com
              </a>
            </li>
          </ul>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default LegalNotice;
