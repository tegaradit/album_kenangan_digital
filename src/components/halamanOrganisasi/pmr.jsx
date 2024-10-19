import Navbar from "../Navbar";
import bingkai from "../../assets/fotoOrganisasi/pmr/pmr.svg"
import ririn from '../../assets/fotoOrganisasi/pmr/ririn.jpg';


export default function PMR() {

    const pengurus = [
        { nama: "ririn dwi septiningsih", jabatan: "ketua PMR 2", image: ririn, motivation: "be yourself and never surrender" },
        { nama: "ririn dwi septiningsih", jabatan: "ketua PMR 2", image: ririn, motivation: "be yourself and never surrender" },
        { nama: "ririn dwi septiningsih", jabatan: "ketua PMR 2", image: ririn, motivation: "be yourself and never surrender" },
        { nama: "ririn dwi septiningsih", jabatan: "ketua PMR 2", image: ririn, motivation: "be yourself and never surrender" },
    ];

    const allSections = [
        { title: "ketua PMR ", data: pengurus.filter(item => ['ketua PMR 2'].includes(item.jabatan)) },
        { title: "Pengurus Inti", data: pengurus.filter(item => ['Sekretaris', 'Bendahara'].includes(item.jabatan)) },
        { title: "Seksi Bidang", data: pengurus.filter(item => item.jabatan.includes('Sekbid')) }
    ];

    const WavyFrameSVG = () => (
        <svg className="absolute w-full h-full top-0 left-0" viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20 Q 70 10, 140 20 T 270 20 Q 320 30, 390 20 T 450 20 L 450 180 Q 390 170, 320 180 T 270 180 Q 210 190, 140 180 T 70 180 Q 30 170, 10 180 Z" fill="none" stroke="#00BFFF" strokeWidth="5" />
        </svg>
    );

    return (
        <>
            <Navbar />
            <h1 className="text-center font-extrabold text-4xl text-white">
                Pengurus PMR Periode 2023/2024
            </h1>
            {allSections.map((section, secIndex) => (
                <div key={secIndex} className="mt-8">
                    <h2 className="text-center font-bold text-2xl text-white mb-4">
                        {section.title}
                    </h2>
                    <div className="flex flex-wrap  items-center justify-center">
                        {section.data.map((item, index) => (
                            <div className="relative mt-10 w-[450px] h-[200px] m-10 hover:scale-110 transition-all hover:shadow-[rgba(77,49,170,0.55)] hover:shadow-[-10px_10px_20px_25px] " key={index}>
                                <img className="absolute  w-full h-full z-10 " src={bingkai} alt="bingkai" />
                                <div className="absolute top-[30px] left-[49px] w-[132px] h-[131px] rounded-full overflow-hidden z-0">
                                    <img src={item.image} alt={item.nama} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-[40px] left-[180px] text-left text-white z-20  ml-1">
                                    <h2 className="font-bold text-lg">Nama: {item.nama}</h2>
                                    <h3 className="font-bold text-md">Jabatan: {item.jabatan}</h3>
                                    <p className="mt-2 text-sm font-semibold">Motivasi: "{item.motivation}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
