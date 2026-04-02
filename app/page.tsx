import prisma from "@/lib/prisma";

export default async function Home() {
  // Ambil data wilayah dari database dblokakbegawe
  const dataWilayah = await prisma.wilayah_bengkulu.findMany();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Halo dari dblokakbegawe! 🌴</h1>
      <p className="mt-4">Daftar Kota di Bengkulu:</p>
      <ul className="mt-2 list-disc pl-5">
        {dataWilayah.map((item) => (
          <li key={item.id_kota}>{item.nama_kota}</li>
        ))}
      </ul>
    </main>
  );
}
