export default function Footer() {
  return (
    <footer className="bg-[#046404] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#D5A20A]">Nogma.H Enterprise</h2>
          <p className="mt-3 text-sm">
            Delivering trusted food products like tombrown, shea butter, and peanut butter — while empowering women through practical trainings in wellness and liquid soap making.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <ul>
            <li>Shop</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#D5A20A] mb-3">Contact Us</h3>
          <p className="text-sm">Email: info@nogma-enterprise.com</p>
          <p className="text-sm">Phone: +233 123 456 789</p>
          <p className="text-sm">Location: Accra, Ghana</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-200 mt-10 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} Nogma.H Enterprise. All rights reserved.
      </div>
    </footer>
  );
}
