import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-[#293E31] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#293E31] font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
} 