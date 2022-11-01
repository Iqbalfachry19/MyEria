-- CreateTable
CREATE TABLE "Karyawan" (
    "id" SERIAL NOT NULL,
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,

    CONSTRAINT "Karyawan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Absensi" (
    "id" SERIAL NOT NULL,
    "idKaryawan" INTEGER NOT NULL,
    "jamMasuk" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jamKeluar" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laporan" (
    "id" SERIAL NOT NULL,
    "idAbsensi" INTEGER NOT NULL,

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Karyawan_nik_key" ON "Karyawan"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "Absensi_idKaryawan_key" ON "Absensi"("idKaryawan");

-- CreateIndex
CREATE UNIQUE INDEX "Laporan_idAbsensi_key" ON "Laporan"("idAbsensi");

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_idKaryawan_fkey" FOREIGN KEY ("idKaryawan") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_idAbsensi_fkey" FOREIGN KEY ("idAbsensi") REFERENCES "Absensi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
