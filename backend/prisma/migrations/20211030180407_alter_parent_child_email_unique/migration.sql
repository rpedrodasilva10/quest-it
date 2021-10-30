/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `children` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `parents` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "children_email_key" ON "children"("email");

-- CreateIndex
CREATE UNIQUE INDEX "parents_email_key" ON "parents"("email");
