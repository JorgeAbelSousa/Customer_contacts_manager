-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "registerDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT,
    "phoneNumber" TEXT,
    "registerDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_phoneNumber_key" ON "customers"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_phoneNumber_key" ON "contacts"("phoneNumber");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
