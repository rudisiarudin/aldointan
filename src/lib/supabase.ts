import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bhvesyqubotgdpfdnftm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJodmVzeXF1Ym90Z2RwZmRuZnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNDI4NTcsImV4cCI6MjA5NzcxODg1N30.hzbN4Ey6PovgwDW4pi1eG2kNpMGSVgd-ay-O_dr_au8';

export const supabase = createClient(supabaseUrl, supabaseKey);
