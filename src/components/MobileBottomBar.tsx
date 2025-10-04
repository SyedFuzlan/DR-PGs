import { Phone, MessageCircle } from 'lucide-react';

export default function MobileBottomBar() {
  const contactNumber = '+91 7411962288';
  const whatsappNumber = '917411962288';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-40">
      <div className="grid grid-cols-2 gap-0">
        <a
          href={`tel:${contactNumber}`}
          className="flex items-center justify-center space-x-2 bg-[#1f8fff] text-white py-4 hover:bg-[#1a7ae6] transition-colors active:bg-[#1567cc]"
        >
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Call Now</span>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-4 hover:bg-[#20BA5A] transition-colors active:bg-[#1BA352]"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
