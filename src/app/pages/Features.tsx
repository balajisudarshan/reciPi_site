import React from 'react'
import HeadingBadge from '../components/HeadingBadge'
import HeaderText from '../components/HeaderText'
import { Icon } from 'lucide-react';
import { DynamicIcon } from "lucide-react/dynamic";
import {
    Home,
    Sparkles,
    Leaf,
    Search,
    BookOpen,
    Star,
    Heart,
    Camera,
    User,
    Bookmark,
    Pencil,
    Lock,
    Tag,
    ChartColumn,
    type LucideIcon,
} from "lucide-react";

const featureCard: {
    icon: LucideIcon,
    title: string,
    description: string;
    iconBg: string;
    iconColor: string;
}[] = [
        {
            icon: Home,
            title: "1. Smart Home Feed",
            description: "Personalised recipe feed with greeting and quick-stat chips (Trending, Top Rated, Quick Meals).",
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
        },
        {
            icon: Sparkles,
            title: "2. Recipe of the Day",
            description: "A curated daily highlight recipe showcased prominently on the home screen.",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
        },
        {
            icon: Leaf,
            title: "3. Dietary Filters",
            description: "One-tap filters for Veg, Vegan, Eggetarian, Non-Veg, and All.",
            iconBg: "bg-green-100",
            iconColor: "text-green-500",
        },
        {
            icon: Leaf,
            title: "4. Seasonal Collections",
            description: "Curated recipe collections based on the current season.",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
        },
        {
            icon: Search,
            title: "5. Advanced Search",
            description: "Search across recipes and chefs in one unified search bar.",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500",
        },
        {
            icon: BookOpen,
            title: "6. Recipe Detail View",
            description: "Full recipe page with image, author, ingredients tab, and step-by-step instructions tab.",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-500",
        },
        {
            icon: Star,
            title: "7. Star Ratings",
            description: "Rate any recipe 1–5 stars with real-time optimistic UI updates.",
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-500",
        },
        {
            icon: Heart,
            title: "8. Like & Save",
            description: "Like recipes and save them to your personal favourites list.",
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
        },
        {
            icon: Camera,
            title: "9. Add Your Recipe",
            description: "Create and publish your own recipes with image upload, ingredients, and cooking steps.",
            iconBg: "bg-cyan-100",
            iconColor: "text-cyan-500",
        },
        {
            icon: User,
            title: "10. Chef Profiles",
            description: "Public chef profiles showing bio, recipe count, likes, and their published recipes.",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500",
        },
        {
            icon: Bookmark,
            title: "11. Favourites Screen",
            description: "Dedicated screen for all your liked and saved recipes in one place.",
            iconBg: "bg-rose-100",
            iconColor: "text-rose-500",
        },
        {
            icon: Pencil,
            title: "12. Edit Profile",
            description: "Customize your username, bio, and avatar.",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
        },
        {
            icon: Lock,
            title: "13. Secure Auth",
            description: "JWT-based login and registration with secure token management.",
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
        },
        {
            icon: Tag,
            title: "14. Info Chips",
            description: "Visual tags on every recipe for Course, Cuisine, Meal Type, and Dietary Category.",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-500",
        },
        {
            icon: ChartColumn,
            title: "15. Recipe Stats",
            description: "See likes, comments, and saves counts on every recipe at a glance.",
            iconBg: "bg-violet-100",
            iconColor: "text-violet-500",
        },
    ];
const Features = () => {
    return (
        <section className="sm:px-20 px-6 pt-24 pb-24 bg-[#fffaf5]">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                    <div>
                        <HeadingBadge text="What you will love" />

                        <HeaderText
                            text1="Powerful Features For"
                            text2="Every Home Chef"
                            size="text-3xl sm:text-4xl"
                        />
                    </div>

                    <p className="max-w-xl text-sm sm:text-base font-light pl-50 leading-7 text-gray-500">
                        Everything you need to discover, create and share
                        recipes with the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featureCard.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
                                    group
                                    bg-white
                                    border border-orange-100/70
                                    rounded-3xl
                                    p-7
                                    min-h-[230px]
                                    shadow-[0_4px_25px_rgba(0,0,0,0.03)]
                                    hover:shadow-[0_10px_35px_rgba(0,0,0,0.07)]
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                "
                            >
                                <div
                                    className={`
                                        w-14 h-14
                                        rounded-2xl
                                        ${item.iconBg}
                                        flex items-center justify-center
                                        mb-6
                                        group-hover:scale-105
                                        transition-transform
                                        duration-300
                                    `}
                                >
                                    <Icon
                                        className={`w-6 h-6 ${item.iconColor}`}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-6 font-light text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};


export default Features