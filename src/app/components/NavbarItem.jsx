"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    return (
        <div>
            <Link
                className={`hover:text-amber-600 font-semibold`}
                href={`/?genre=${param} === ? 
                'underline underline-offset-8 decoration-4 decoraction-amber-500 rounded-lg : '' ' `}
            >
                {title}
            </Link>
        </div>
    );
}
