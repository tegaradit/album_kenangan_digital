import Navbar from "../Navbar"

export default function Guru() {
    const guru = [
        {
            nama: "haryoko",
            jabatan: "kepala sekolah",
            image: "https://smkn1kebumen.sch.id/wp-content/uploads/2024/07/Drs-Haryoko-MM.png",
            motivasi: "tetap menyerah walaupun bisa"
        },
        {
            nama: "imam sujarwo",
            jabatan: "wakil kepala sekolah bidang kesiswaan",
            image: "https://smkn1kebumen.sch.id/wp-content/uploads/2024/07/IMAM-SUJARWO-S-Pd.jpg",
            motivasi: "menginggalkan lampu merah"
        },
        {
            nama: "nugroho budi r",
            jabatan: "wakil kepala sekolah bidang sarana prasana",
            image: "https://smkn1kebumen.sch.id/wp-content/uploads/2024/07/NUGROHO-BUDHI-R-S-T-M-Kom.jpg",
            motivasi: "menjadi orang yang mampu berubah"
        },
        {
            nama: "khaerul hidayat",
            jabatan: "wakil kepala sekolah bidang humas",
            image: "https://smkn1kebumen.sch.id/wp-content/uploads/2024/07/KHAERUL-HIDAYAT-SE-M-M.jpg",
            motivasi: "mengawali sekolah dengan hormat"
        }
    ];

    const allSections = [
        { title: "Kepala Sekolah", data: guru.filter(item => item.jabatan === "kepala sekolah") },
        { title: "Wakil Kepala Sekolah", data: guru.filter(item => item.jabatan.includes("wakil kepala sekolah")) }
    ];

    return (
        <>
            <Navbar />
            <h1 className="text-white text-center text-3xl font-extrabold">
                Guru SMK Negeri 1 Kebumen 2023/2024
            </h1>
            {allSections.map((section, secIndex) => (
                <div key={secIndex} className="mt-8">
                    <h2 className="text-center font-bold text-2xl text-white mb-4">
                        {section.title}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 ">
                        {section.data.map((item, index) => (
                            <div key={index} className="card card-compact bg-base-100 w-64 shadow-xl hover:scale-105 hover:shadow-[5px_5px_80px_10px] m-5 hover:shadow-white transition-all">
                                <figure>
                                    <img className="w-full h-72 object-center object-cover"
                                        src={item.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                                        alt={item.nama || "Guru"}
                                    />
                                </figure>
                                <div className="card-body bg-white rounded-b-xl">
                                    <h2 className="card-title font-bold">{item.nama}</h2>
                                    <p className="font-medium">{item.jabatan || "Deskripsi tidak tersedia."}</p>
                                    <div className="card-actions justify-center">
                                        <p>"{item.motivasi}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
