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
    "jamMasuk" TIMESTAMP(3) NOT NULL,
    "jamKeluar" TIMESTAMP(3) NOT NULL,
    "idKaryawan" INTEGER NOT NULL,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IsiAbsensi" (
    "id" SERIAL NOT NULL,
    "idAbsensi" INTEGER NOT NULL,
    "waktuAbsensiMasuk" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "waktuAbsensiKeluar" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IsiAbsensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Karyawan_nik_key" ON "Karyawan"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "Absensi_idKaryawan_key" ON "Absensi"("idKaryawan");

-- CreateIndex
CREATE UNIQUE INDEX "IsiAbsensi_idAbsensi_key" ON "IsiAbsensi"("idAbsensi");

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_idKaryawan_fkey" FOREIGN KEY ("idKaryawan") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IsiAbsensi" ADD CONSTRAINT "IsiAbsensi_idAbsensi_fkey" FOREIGN KEY ("idAbsensi") REFERENCES "Absensi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
