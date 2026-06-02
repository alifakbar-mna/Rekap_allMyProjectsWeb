const projects = [
    {
        name: "Activity Scheduler",

        image: "image/G-activityScheduler.png",

        website: "https://website-activity-scheduler.vercel.app",

        github: "https://github.com/alifakbar-mna/Website_Activity_Scheduler",

        description:
            "Activity Scheduler hadir dengan menyelesaikan masalah bias informasi saat pembuatan dan pembahasan event atau acara dengan tampilan yang memudahkan pengguna.",

        technologies: [
            "JavaScript",
            "CSS",
            "HTML"
        ]
    },

    {
        name: "AI Data Analytics Dashboard",

        image: "image/G-activityScheduler.png",

        website: "https://dashboard-kamu.com",

        github: "https://github.com/username/project2",

        description:
            "Dashboard visualisasi data dan analitik perusahaan SaaS.",

        technologies: [
            "React",
            "ChartJS",
            "Tailwind"
        ]
    },

    {
        name: "Corporate Landing Page",

        image: "image/G-activityScheduler.png",

        website: "https://companyprofile.com",

        github: "https://github.com/username/project3",

        description:
            "Landing page perusahaan dengan SEO optimization dan animasi interaktif.",

        technologies: [
            "HTML",
            "CSS",
            "GSAP"
        ]
    }
];

const container = document.getElementById("projects-container");
const countText = document.getElementById("project-count");

countText.textContent = `Live Projects (${projects.length})`;

projects.forEach(project => {

    const techBadges = project.technologies
        .map(
            tech =>
            `
            <span
                class="text-[10px] uppercase tracking-wider font-semibold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                ${tech}
            </span>
        `
        )
        .join("");

    container.innerHTML += `
    
    <div class="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl shadow-black/40">

        <div>

            <div class="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">

                <div class="flex gap-1.5">
                    <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>

                <div class="bg-slate-900 text-[10px] text-slate-500 px-6 py-1 rounded-md w-1/2 text-center truncate border border-slate-800">
                    ${project.website}
                </div>

                <div class="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-green"></span>
                    Live
                </div>

            </div>

            <div class="relative aspect-video overflow-hidden bg-slate-950 border-b border-slate-800">

                <img
                    src="${project.image}"
                    alt="${project.name}"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">

            </div>

            <div class="p-6">

                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${techBadges}
                </div>

                <h3 class="heading-font text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    ${project.name}
                </h3>

                <p class="text-slate-400 text-sm leading-relaxed">
                    ${project.description}
                </p>

            </div>

        </div>

        <div class="px-6 pb-6 pt-2 flex gap-3">

            <a
                href="${project.website}"
                target="_blank"
                class="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs py-2.5 px-4 rounded-xl">

                Live Preview ↗

            </a>

            <a
                href="${project.github}"
                target="_blank"
                class="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs py-2.5 px-3 rounded-xl">

                Source

            </a>

        </div>

    </div>
    `;
});