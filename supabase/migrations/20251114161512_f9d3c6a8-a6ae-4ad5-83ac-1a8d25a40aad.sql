-- Table pour les réservations
CREATE TABLE public.reservations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  guests INTEGER NOT NULL,
  reservation_date DATE NOT NULL,
  total_price INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les cartes bancaires (derniers 4 chiffres seulement pour sécurité)
CREATE TABLE public.payment_cards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reservation_id UUID NOT NULL REFERENCES public.reservations(id) ON DELETE CASCADE,
  cardholder_name TEXT NOT NULL,
  card_last_four TEXT NOT NULL,
  expiry_month TEXT NOT NULL,
  expiry_year TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_cards ENABLE ROW LEVEL SECURITY;

-- Policies publiques pour permettre l'insertion
CREATE POLICY "Tout le monde peut créer une réservation"
ON public.reservations
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Tout le monde peut voir ses réservations"
ON public.reservations
FOR SELECT
USING (true);

CREATE POLICY "Tout le monde peut ajouter une carte"
ON public.payment_cards
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Tout le monde peut voir les cartes"
ON public.payment_cards
FOR SELECT
USING (true);