-- CreateTable
CREATE TABLE "Users" (
    "id_users" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_users")
);

-- CreateTable
CREATE TABLE "Leads" (
    "id_leads" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "score" INTEGER NOT NULL,
    "notes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leads_pkey" PRIMARY KEY ("id_leads")
);

-- CreateTable
CREATE TABLE "Conversations" (
    "id_conversations" SERIAL NOT NULL,
    "lead_id" INTEGER NOT NULL,
    "channel" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conversations_pkey" PRIMARY KEY ("id_conversations")
);

-- CreateTable
CREATE TABLE "Conversions" (
    "id_conversions" SERIAL NOT NULL,
    "lead_id" INTEGER NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "closed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conversions_pkey" PRIMARY KEY ("id_conversions")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id_messages" SERIAL NOT NULL,
    "conversation_id" INTEGER NOT NULL,
    "sender" TEXT NOT NULL,
    "content" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id_messages")
);

-- CreateTable
CREATE TABLE "Automations" (
    "id_automations" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "trigger_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Automations_pkey" PRIMARY KEY ("id_automations")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Leads" ADD CONSTRAINT "Leads_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id_users") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversations" ADD CONSTRAINT "Conversations_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "Leads"("id_leads") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversions" ADD CONSTRAINT "Conversions_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "Leads"("id_leads") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "Conversations"("id_conversations") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Automations" ADD CONSTRAINT "Automations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id_users") ON DELETE CASCADE ON UPDATE CASCADE;
