import Navbar from "../Navbar";
import bingkai from "../../assets/fotoOrganisasi/osis/bingkai.svg";
import siti from '../../assets/fotoOrganisasi/osis/siti.JPG';
import indri from '../../assets/fotoOrganisasi/osis/indri.JPG';
import azka from '../../assets/fotoOrganisasi/osis/azka.JPG';
import rohim from '../../assets/fotoOrganisasi/osis/rohim.JPG';
import imam from '../../assets/fotoOrganisasi/osis/imam.JPG';
import badrudin from '../../assets/fotoOrganisasi/osis/badrudin.JPG';
import gita from '../../assets/fotoOrganisasi/osis/gita.JPG';
import tegar from '../../assets/fotoOrganisasi/osis/tegar.JPG';
import alya from '../../assets/fotoOrganisasi/osis/alya.JPG';
import lasminah from '../../assets/fotoOrganisasi/osis/lasminah.JPG';
import zahra from '../../assets/fotoOrganisasi/osis/zahra.JPG';
import nova from '../../assets/fotoOrganisasi/osis/nova.JPG';
import nanda from '../../assets/fotoOrganisasi/osis/nanda.JPG';
import rifa from '../../assets/fotoOrganisasi/osis/rifa.JPG';

export default function Osis() {

    const pengurus = [
        { nama: "siti nur khomsiatun", jabatan: "ketua osis", image: siti, motivation: "be yourself and never surrender" },
        { nama: "indri prihatina sari", jabatan: "Sekretaris", image: indri, motivation: "be yourself and never surrender" },
        { nama: "azka fatimatun nida", jabatan: "Bendahara", image: azka, motivation: "be yourself and never surrender" },
        { nama: "Rohim Arbangin", jabatan: "Sekbid 1", image: rohim, motivation: "be yourself and never surrender" },
        { nama: "imam tirta samudra", jabatan: "Sekbid 2", image: imam, motivation: "be yourself and never surrender" },
        { nama: "muhammad Badrudin", jabatan: "Sekbid 3", image: badrudin, motivation: "be yourself and never surrender" },
        { nama: "Gita diah astuti", jabatan: "Sekbid 3", image: gita, motivation: "be yourself and never surrender" },
        { nama: "tegar adityansyah Kurniawan", jabatan: "Sekbid 4", image: tegar, motivation: "be yourself and never surrender" },
        { nama: "Alya Agus Trisani", jabatan: "Sekbid 5", image: alya, motivation: "be yourself and never surrender" },
        { nama: "lasminah", jabatan: "Sekbid 5", image: lasminah, motivation: "be yourself and never surrender" },
        { nama: "Zahra kalilah", jabatan: "sekbid 6", image: zahra, motivation: "be yourself and never surrender" },
        { nama: "Nova Ardiana", jabatan: "Sekbid 6", image: nova, motivation: "be yourself and never surrender" },
        { nama: "Rizky Rynaldi", jabatan: "Sekbid 7", image: "", motivation: "be yourself and never surrender" },
        { nama: "Sakha Muhammad Arkan", jabatan: "Sekbid 7", image: "", motivation: "be yourself and never surrender" },
        { nama: "Nanda Naafila Amrina", jabatan: "Sekbid 8", image: nanda, motivation: "be yourself and never surrender" },
        { nama: "Tiara Eka Dewi", jabatan: "Sekbid 9", image: "", motivation: "be yourself and never surrender" },
        { nama: "Riziq Lili Ulil Albab", jabatan: "Sekbid 9", image: "", motivation: "be yourself and never surrender" },
        { nama: "Rifa Suci Ramadhani", jabatan: "Sekbid 10", image: rifa, motivation: "be yourself and never surrender" },
    ];

    const allSections = [
        { title: "Ketua Osis", data: pengurus.filter(item => ['ketua osis'].includes(item.jabatan)) },
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
                Pengurus OSIS Periode 2023/2024
            </h1>
            {allSections.map((section, secIndex) => (
                <div key={secIndex} className="mt-8">
                    <h2 className="text-center font-bold text-2xl text-white mb-4">
                        {section.title}
                    </h2>
                    <div className="flex flex-wrap  items-center justify-center">
                        {section.data.map((item, index) => (
                            <div className="relative mt-10 w-[420px] h-[200px] m-10 hover:scale-110 transition-all hover:shadow-[rgba(77,49,170,0.55)] hover:shadow-[-10px_10px_20px_25px] " key={index}>
                                <img className="absolute  w-full h-full z-10 " src={bingkai} alt="bingkai" />
                                <div className="absolute top-[31px] left-[37px] w-[126px] h-[126px] rounded-full overflow-hidden z-0">
                                    <img src={item.image} alt={item.nama} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-[40px] left-[180px] text-left text-white z-20">
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
