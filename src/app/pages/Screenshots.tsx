import React from "react";
import HeadingBadge from "../components/HeadingBadge";
import HeaderText from "../components/HeaderText";
import Image from "next/image";
import search from "@/assets/search.png";
import phone from "@/assets/phone.png";
import ScreenShotDisplay from "../components/ScreenShotDisplay";
import ingredient from "@/assets/ingr.png";
import fav from "@/assets/fav.png";
const Screenshots = () => {
    return (
        <section id="screenshots" className="bg-white py-24 px-6 sm:px-20">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col items-center text-center mb-20">
                    <HeadingBadge text="Screenshots" />

                    <HeaderText
                        text1="Designed Screen"
                        text2="By Screen"
                        size="text-4xl"
                        center
                    />

                    <p className="text-md font-light mt-5 text-gray-500">
                        A quick look at the cooking app
                    </p>
                </div>

                <div className="space-y-28">
                    <ScreenShotDisplay image={phone} heading="Home" slug="A calm place to start cooking" description="The day opens with one featured recipe and a short, personal shortlist, giving you inspiration without an overwhelming feed." />
                    <ScreenShotDisplay image={search} heading="Search" slug="Find exactly what you want to cook" description="Search recipes and chefs instantly with smart filters that help narrow down your next meal." rev />
                    <ScreenShotDisplay image={ingredient} heading="Recipe Details" slug="Steps written for a busy kitchen" description="Big type, timed steps, macros up front and an ingredient list you can check off with wet hands." />
                    <ScreenShotDisplay image={fav} heading="Favorites" slug="Your own cookbook" description="Tap the heart and it's yours forever — synced, searchable and available offline." rev />

                </div>
            </div>
        </section>
    );
};

export default Screenshots;