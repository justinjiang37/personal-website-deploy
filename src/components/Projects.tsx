import ProjectComponents from "@/components/ProjectComponents";

export default function Projects() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                <ProjectComponents
                    title="NBA MVP: Stats VS Narrative (In Progress)"
                    description="A ML model that predicts and compares difference between the NBA MVP using objective game/box score statistics versus public sentiment"
                    imageUrl="/images/Projects/NBA MVP.webp"
                    link="https://github.com/justinjiang37/NBA-MVP-Model"
                />
                <ProjectComponents
                    title="Stock Pattern Identification (In Progress)"
                    description="An AI model that detects chart patterns in price data to generate real-time trading signals."
                    imageUrl="/images/Projects/Exness_day_trading_chart_patterns3x_suffix_min_bc40370233.png"
                    link="https://github.com/justinjiang37/Stock-Pattern-Singaler"
                />
                <ProjectComponents
                    title="BREW | Winner of LaHacks 2025"
                    description="An automated outreaching software levereaging Clado API, Google Gemini API, and Stagehand."
                    imageUrl="/images/Projects/Brew.jpeg"
                    link="https://devpost.com/software/brew-rojb0x"
                />
                <ProjectComponents
                    title="TempoRun | Winner of HackSC SoCal Tech Week 2024"
                    description="An iOS app that create personalized spotify playlists based on workout duration, pace, and BPM targets."
                    imageUrl="/images/Projects/gallery.jpg"
                    link="https://devpost.com/software/temporun-7sj6r3?_gl=1*c04k6b*_gcl_au*NDU0MjY4ODE3LjE3NDkzNDAzNjU.*_ga*NzM5NDY2NjI1LjE3NDkzNDAzNjU.*_ga_0YHJK3Y10M*czE3NTAzNjg3ODIkbzckZzEkdDE3NTAzNjg4MDIkajQwJGwwJGgw"
                />
                <ProjectComponents
                    title="ATE Ball"
                    description="A pool table that uses computer vision to detect pools balls and project their predicted trajectory."
                    imageUrl="/images/Projects/Screenshot 2025-06-20 at 1.29.29 PM.png"
                />
                <ProjectComponents
                    title="Supernovae Classification Research"
                    description="Worked in research team of 4 to classify Supernovae 2023mnc using its recorded luminosity data points."
                    imageUrl="/images/Projects/SNwithrefstars.png"
                    link=" https://doi.org/10.1007/s10509-023-04250-x"
                />
                <ProjectComponents
                    title="CanSat Design Challenge"
                    description="Engineered a pop can sized satellite capable of air-to-ground atmospheric data transmission with a team of 6."
                    imageUrl="/images/Projects/IMG_3D6724A1118A-1.jpeg"
                    link="https://www.csdcms.ca/"
                />
                <ProjectComponents
                    title="The Click"
                    description="A multiplayer horror game created using Unity, Photon Networking, and NavMesh AI Path Finding."
                    imageUrl="/images/Projects/Screenshot 2025-06-20 at 1.37.50 PM 1.png"
                    link="https://www.youtube.com/playlist?list=PLvAO_Wm_nd9988h7dCTqAu7IBqUft2WCj"
                />
                {/* ...more cards */}
            </div>
        </div>
    )
}