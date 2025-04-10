import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Commitment() {
    return (
        <section className="bg-[#FCF9F4] py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 flex flex-col items-start justify-center w-full">
            <div className="w-full">
                <h2 className="text-[#293E31] text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                    Committed to Sustainable Agriculture
                </h2>
                <div className="space-y-6">
                    <p className="text-gray-700 text-justify">
                        Farming is more than a profession — it's a legacy that nourishes communities and sustains generations. But the path isn't always easy. Rising costs, unpredictable weather, and soil degradation challenge even the most resilient farmers.
                    </p>
                    <p className="text-gray-700 text-justify">
                        The right partner is more than a supplier — they're a problem solver, a guide, and an advocate for your success. They help you navigate challenges, reduce dependency on chemicals, and explore sustainable solutions tailored to your land's needs.
                    </p>
                    <p className="text-gray-700 text-justify">
                        Farming isn't just about today — it's about building a legacy for tomorrow. Choosing wisely can make all the difference for your fields, family, and agriculture's future.
                    </p>
                    <p className="text-gray-700 text-justify">
                        Let's grow together toward a sustainable future.
                    </p>
                </div>
                <Link to='/about'>
                    <Button className="bg-[#FE8340] cursor-pointer hover:bg-[#e06724] text-white w-full mt-3 sm:w-auto px-6 py-2.5 sm:py-3">
                        Learn more about us
                    </Button>
                </Link>
            </div>
        </section>
    );
}
