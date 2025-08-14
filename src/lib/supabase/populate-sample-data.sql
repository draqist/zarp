-- Populate database with sample data for Traq
-- This script creates sample sectors, skills, job posts, and related data

-- First, let's clear existing data (optional - comment out if you want to keep existing data)
-- DELETE FROM public.interviews;
-- DELETE FROM public.applications;
-- DELETE FROM public.job_posts;
-- DELETE FROM public.user_skills;
-- DELETE FROM public.skills;
-- DELETE FROM public.sectors;

-- 1. Insert sample sectors
INSERT INTO public.sectors (id, name, description) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Technology', 'Software development, IT, and technology companies'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Finance', 'Banking, investment, and financial services'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Healthcare', 'Medical, pharmaceutical, and healthcare services'),
  ('550e8400-e29b-41d4-a716-446655440004', 'Marketing', 'Digital marketing, advertising, and communications'),
  ('550e8400-e29b-41d4-a716-446655440005', 'Education', 'EdTech, training, and educational services'),
  ('550e8400-e29b-41d4-a716-446655440006', 'E-commerce', 'Online retail and marketplace platforms'),
  ('550e8400-e29b-41d4-a716-446655440007', 'Consulting', 'Business consulting and advisory services'),
  ('550e8400-e29b-41d4-a716-446655440008', 'Manufacturing', 'Industrial and manufacturing companies')
ON CONFLICT (name) DO NOTHING;

-- 2. Insert sample skills
INSERT INTO public.skills (id, name, category) VALUES
  -- Programming Languages
  ('660e8400-e29b-41d4-a716-446655440001', 'JavaScript', 'Programming'),
  ('660e8400-e29b-41d4-a716-446655440002', 'Python', 'Programming'),
  ('660e8400-e29b-41d4-a716-446655440003', 'React', 'Frontend'),
  ('660e8400-e29b-41d4-a716-446655440004', 'Node.js', 'Backend'),
  ('660e8400-e29b-41d4-a716-446655440005', 'TypeScript', 'Programming'),
  ('660e8400-e29b-41d4-a716-446655440006', 'SQL', 'Database'),
  ('660e8400-e29b-41d4-a716-446655440007', 'AWS', 'Cloud'),
  ('660e8400-e29b-41d4-a716-446655440008', 'Docker', 'DevOps'),
  ('660e8400-e29b-41d4-a716-446655440009', 'Git', 'Version Control'),
  ('660e8400-e29b-41d4-a716-446655440010', 'MongoDB', 'Database'),
  -- Business Skills
  ('660e8400-e29b-41d4-a716-446655440011', 'Project Management', 'Management'),
  ('660e8400-e29b-41d4-a716-446655440012', 'Agile', 'Methodology'),
  ('660e8400-e29b-41d4-a716-446655440013', 'Data Analysis', 'Analytics'),
  ('660e8400-e29b-41d4-a716-446655440014', 'SEO', 'Marketing'),
  ('660e8400-e29b-41d4-a716-446655440015', 'Content Marketing', 'Marketing'),
  ('660e8400-e29b-41d4-a716-446655440016', 'Sales', 'Business'),
  ('660e8400-e29b-41d4-a716-446655440017', 'Customer Service', 'Business'),
  ('660e8400-e29b-41d4-a716-446655440018', 'Financial Modeling', 'Finance'),
  ('660e8400-e29b-41d4-a716-446655440019', 'Risk Management', 'Finance'),
  ('660e8400-e29b-41d4-a716-446655440020', 'UI/UX Design', 'Design')
ON CONFLICT (name) DO NOTHING;

-- 3. Insert sample job posts
INSERT INTO public.job_posts (id, title, company, description, location, salary_min, salary_max, salary_currency, job_type, remote_type, experience_level, url, source, source_id, sector_id, skills, posted_date, expires_date) VALUES
  -- Technology Jobs
  ('770e8400-e29b-41d4-a716-446655440001', 'Senior Frontend Developer', 'TechCorp Inc.', 'We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building scalable web applications using React, TypeScript, and modern frontend technologies.', 'San Francisco, CA', 120000, 180000, 'USD', 'full-time', 'hybrid', 'senior', 'https://example.com/job1', 'linkedin', 'linkedin_001', '550e8400-e29b-41d4-a716-446655440001', ARRAY['React', 'TypeScript', 'JavaScript', 'CSS'], NOW() - INTERVAL '5 days', NOW() + INTERVAL '30 days'),
  
  ('770e8400-e29b-41d4-a716-446655440002', 'Full Stack Engineer', 'StartupXYZ', 'Join our fast-growing startup as a Full Stack Engineer. You will work on both frontend and backend development, using Node.js, React, and PostgreSQL.', 'Remote', 90000, 140000, 'USD', 'full-time', 'remote', 'mid', 'https://example.com/job2', 'indeed', 'indeed_001', '550e8400-e29b-41d4-a716-446655440001', ARRAY['Node.js', 'React', 'PostgreSQL', 'JavaScript'], NOW() - INTERVAL '3 days', NOW() + INTERVAL '25 days'),
  
  ('770e8400-e29b-41d4-a716-446655440003', 'DevOps Engineer', 'CloudTech Solutions', 'We are seeking a DevOps Engineer to help us scale our infrastructure. Experience with AWS, Docker, and CI/CD pipelines required.', 'Austin, TX', 110000, 160000, 'USD', 'full-time', 'on-site', 'senior', 'https://example.com/job3', 'glassdoor', 'glassdoor_001', '550e8400-e29b-41d4-a716-446655440001', ARRAY['AWS', 'Docker', 'Kubernetes', 'Jenkins'], NOW() - INTERVAL '7 days', NOW() + INTERVAL '35 days'),
  
  ('770e8400-e29b-41d4-a716-446655440004', 'Data Scientist', 'DataAnalytics Co.', 'Join our data science team to build machine learning models and analyze large datasets. Python, SQL, and statistical analysis skills required.', 'New York, NY', 130000, 190000, 'USD', 'full-time', 'hybrid', 'senior', 'https://example.com/job4', 'linkedin', 'linkedin_002', '550e8400-e29b-41d4-a716-446655440001', ARRAY['Python', 'SQL', 'Machine Learning', 'Statistics'], NOW() - INTERVAL '2 days', NOW() + INTERVAL '20 days'),
  
  ('770e8400-e29b-41d4-a716-446655440005', 'Junior React Developer', 'WebDev Studio', 'Entry-level position for a React developer. We will provide training and mentorship. Basic JavaScript knowledge required.', 'Chicago, IL', 60000, 80000, 'USD', 'full-time', 'on-site', 'entry', 'https://example.com/job5', 'indeed', 'indeed_002', '550e8400-e29b-41d4-a716-446655440001', ARRAY['React', 'JavaScript', 'HTML', 'CSS'], NOW() - INTERVAL '1 day', NOW() + INTERVAL '15 days'),
  
  -- Finance Jobs
  ('770e8400-e29b-41d4-a716-446655440006', 'Financial Analyst', 'GlobalBank', 'Join our finance team to analyze market trends and provide investment recommendations. Strong analytical skills and financial modeling experience required.', 'London, UK', 70000, 100000, 'GBP', 'full-time', 'hybrid', 'mid', 'https://example.com/job6', 'linkedin', 'linkedin_003', '550e8400-e29b-41d4-a716-446655440002', ARRAY['Financial Modeling', 'Excel', 'Risk Management', 'Analysis'], NOW() - INTERVAL '4 days', NOW() + INTERVAL '28 days'),
  
  ('770e8400-e29b-41d4-a716-446655440007', 'Investment Manager', 'Capital Partners', 'Senior role managing investment portfolios for high-net-worth clients. CFA certification preferred.', 'New York, NY', 150000, 250000, 'USD', 'full-time', 'on-site', 'senior', 'https://example.com/job7', 'glassdoor', 'glassdoor_002', '550e8400-e29b-41d4-a716-446655440002', ARRAY['Investment Management', 'Portfolio Analysis', 'CFA', 'Risk Management'], NOW() - INTERVAL '6 days', NOW() + INTERVAL '40 days'),
  
  -- Healthcare Jobs
  ('770e8400-e29b-41d4-a716-446655440008', 'Healthcare Data Analyst', 'MedTech Innovations', 'Analyze healthcare data to improve patient outcomes. Experience with healthcare systems and data analysis required.', 'Boston, MA', 80000, 120000, 'USD', 'full-time', 'remote', 'mid', 'https://example.com/job8', 'indeed', 'indeed_003', '550e8400-e29b-41d4-a716-446655440003', ARRAY['Data Analysis', 'Healthcare', 'SQL', 'Python'], NOW() - INTERVAL '3 days', NOW() + INTERVAL '22 days'),
  
  -- Marketing Jobs
  ('770e8400-e29b-41d4-a716-446655440009', 'Digital Marketing Manager', 'BrandBoost Agency', 'Lead digital marketing campaigns for clients. Experience with SEO, social media, and Google Ads required.', 'Los Angeles, CA', 70000, 110000, 'USD', 'full-time', 'hybrid', 'mid', 'https://example.com/job9', 'linkedin', 'linkedin_004', '550e8400-e29b-41d4-a716-446655440004', ARRAY['SEO', 'Content Marketing', 'Google Ads', 'Social Media'], NOW() - INTERVAL '2 days', NOW() + INTERVAL '18 days'),
  
  ('770e8400-e29b-41d4-a716-446655440010', 'Content Strategist', 'ContentFirst', 'Create compelling content strategies for brands. Strong writing skills and content marketing experience required.', 'Remote', 60000, 90000, 'USD', 'full-time', 'remote', 'mid', 'https://example.com/job10', 'indeed', 'indeed_004', '550e8400-e29b-41d4-a716-446655440004', ARRAY['Content Marketing', 'SEO', 'Copywriting', 'Strategy'], NOW() - INTERVAL '1 day', NOW() + INTERVAL '12 days'),
  
  -- Education Jobs
  ('770e8400-e29b-41d4-a716-446655440011', 'EdTech Product Manager', 'LearnTech Solutions', 'Lead product development for educational technology platforms. Experience with EdTech and product management required.', 'Seattle, WA', 100000, 150000, 'USD', 'full-time', 'hybrid', 'senior', 'https://example.com/job11', 'glassdoor', 'glassdoor_003', '550e8400-e29b-41d4-a716-446655440005', ARRAY['Product Management', 'EdTech', 'Agile', 'User Research'], NOW() - INTERVAL '5 days', NOW() + INTERVAL '30 days'),
  
  -- E-commerce Jobs
  ('770e8400-e29b-41d4-a716-446655440012', 'E-commerce Specialist', 'ShopOnline Inc.', 'Manage online store operations and optimize conversion rates. Experience with Shopify and e-commerce analytics required.', 'Miami, FL', 50000, 75000, 'USD', 'full-time', 'on-site', 'entry', 'https://example.com/job12', 'linkedin', 'linkedin_005', '550e8400-e29b-41d4-a716-446655440006', ARRAY['E-commerce', 'Shopify', 'Analytics', 'Customer Service'], NOW() - INTERVAL '4 days', NOW() + INTERVAL '25 days'),
  
  -- Consulting Jobs
  ('770e8400-e29b-41d4-a716-446655440013', 'Business Consultant', 'Strategy Partners', 'Provide strategic consulting to Fortune 500 companies. MBA and consulting experience preferred.', 'Chicago, IL', 120000, 200000, 'USD', 'full-time', 'on-site', 'senior', 'https://example.com/job13', 'glassdoor', 'glassdoor_004', '550e8400-e29b-41d4-a716-446655440007', ARRAY['Consulting', 'Strategy', 'Project Management', 'Analysis'], NOW() - INTERVAL '6 days', NOW() + INTERVAL '35 days'),
  
  -- Manufacturing Jobs
  ('770e8400-e29b-41d4-a716-446655440014', 'Supply Chain Analyst', 'Manufacturing Corp', 'Analyze and optimize supply chain operations. Experience with logistics and data analysis required.', 'Detroit, MI', 65000, 95000, 'USD', 'full-time', 'hybrid', 'mid', 'https://example.com/job14', 'indeed', 'indeed_005', '550e8400-e29b-41d4-a716-446655440008', ARRAY['Supply Chain', 'Data Analysis', 'Logistics', 'Excel'], NOW() - INTERVAL '3 days', NOW() + INTERVAL '20 days'),
  
  -- More Technology Jobs
  ('770e8400-e29b-41d4-a716-446655440015', 'Backend Developer', 'API Solutions', 'Build scalable backend services using Node.js and PostgreSQL. Experience with microservices architecture preferred.', 'Denver, CO', 95000, 140000, 'USD', 'full-time', 'remote', 'mid', 'https://example.com/job15', 'linkedin', 'linkedin_006', '550e8400-e29b-41d4-a716-446655440001', ARRAY['Node.js', 'PostgreSQL', 'API Development', 'JavaScript'], NOW() - INTERVAL '2 days', NOW() + INTERVAL '18 days'),
  
  ('770e8400-e29b-41d4-a716-446655440016', 'UI/UX Designer', 'Design Studio Pro', 'Create beautiful and intuitive user interfaces. Experience with Figma and design systems required.', 'Portland, OR', 80000, 120000, 'USD', 'full-time', 'hybrid', 'mid', 'https://example.com/job16', 'indeed', 'indeed_006', '550e8400-e29b-41d4-a716-446655440001', ARRAY['UI/UX Design', 'Figma', 'Prototyping', 'User Research'], NOW() - INTERVAL '1 day', NOW() + INTERVAL '15 days'),
  
  ('770e8400-e29b-41d4-a716-446655440017', 'Machine Learning Engineer', 'AI Innovations', 'Build and deploy machine learning models. Experience with Python, TensorFlow, and cloud platforms required.', 'San Jose, CA', 130000, 200000, 'USD', 'full-time', 'hybrid', 'senior', 'https://example.com/job17', 'glassdoor', 'glassdoor_005', '550e8400-e29b-41d4-a716-446655440001', ARRAY['Machine Learning', 'Python', 'TensorFlow', 'AWS'], NOW() - INTERVAL '4 days', NOW() + INTERVAL '30 days'),
  
  ('770e8400-e29b-41d4-a716-446655440018', 'QA Engineer', 'Quality Assurance Inc.', 'Ensure software quality through comprehensive testing. Experience with automated testing and CI/CD required.', 'Atlanta, GA', 70000, 110000, 'USD', 'full-time', 'remote', 'mid', 'https://example.com/job18', 'linkedin', 'linkedin_007', '550e8400-e29b-41d4-a716-446655440001', ARRAY['Testing', 'Automation', 'Selenium', 'CI/CD'], NOW() - INTERVAL '3 days', NOW() + INTERVAL '22 days'),
  
  ('770e8400-e29b-41d4-a716-446655440019', 'Product Manager', 'Product Vision', 'Lead product development from concept to launch. Experience with agile methodologies and user research required.', 'Austin, TX', 100000, 160000, 'USD', 'full-time', 'hybrid', 'senior', 'https://example.com/job19', 'indeed', 'indeed_007', '550e8400-e29b-41d4-a716-446655440001', ARRAY['Product Management', 'Agile', 'User Research', 'Strategy'], NOW() - INTERVAL '5 days', NOW() + INTERVAL '28 days'),
  
  ('770e8400-e29b-41d4-a716-446655440020', 'Sales Engineer', 'Tech Sales Solutions', 'Bridge the gap between technical and sales teams. Strong technical background and sales skills required.', 'Dallas, TX', 90000, 140000, 'USD', 'full-time', 'on-site', 'mid', 'https://example.com/job20', 'glassdoor', 'glassdoor_006', '550e8400-e29b-41d4-a716-446655440001', ARRAY['Sales', 'Technical Sales', 'Presentation', 'Customer Service'], NOW() - INTERVAL '2 days', NOW() + INTERVAL '20 days')
ON CONFLICT (id) DO NOTHING;

-- 4. Insert sample user (you can replace this with your actual user ID after signing in)
-- Note: This is just for demonstration. In practice, users will be created through the auth system
-- INSERT INTO public.users (id, email, first_name, last_name) VALUES
--   ('880e8400-e29b-41d4-a716-446655440001', 'demo@example.com', 'Demo', 'User')
-- ON CONFLICT (id) DO NOTHING;

-- 5. Insert sample applications (uncomment and modify user_id after you have a real user)
-- INSERT INTO public.applications (user_id, job_post_id, status, applied_date, notes) VALUES
--   ('880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', 'applied', NOW() - INTERVAL '3 days', 'Great opportunity for senior role'),
--   ('880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440002', 'interviewing', NOW() - INTERVAL '5 days', 'Remote position with good benefits'),
--   ('880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440003', 'applied', NOW() - INTERVAL '1 day', 'DevOps role with cloud focus'),
--   ('880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440004', 'interested', NOW() - INTERVAL '2 days', 'Data science position'),
--   ('880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440005', 'rejected', NOW() - INTERVAL '7 days', 'Entry level position')

-- 6. Insert sample interviews (uncomment after creating applications)
-- INSERT INTO public.interviews (application_id, scheduled_date, interview_type, interviewer, notes, status) VALUES
--   ((SELECT id FROM public.applications WHERE job_post_id = '770e8400-e29b-41d4-a716-446655440002' LIMIT 1), NOW() + INTERVAL '2 days', 'video', 'Sarah Johnson', 'Technical interview with coding challenge', 'scheduled'),
--   ((SELECT id FROM public.applications WHERE job_post_id = '770e8400-e29b-41d4-a716-446655440002' LIMIT 1), NOW() + INTERVAL '5 days', 'phone', 'Mike Chen', 'Final round with hiring manager', 'scheduled')

-- 7. Insert sample cover letter templates (uncomment after creating a user)
-- INSERT INTO public.cover_letter_templates (user_id, name, content, is_default) VALUES
--   ('880e8400-e29b-41d4-a716-446655440001', 'Default Template', 'Dear Hiring Manager,\n\nI am writing to express my interest in the [Position] role at [Company]. With my background in [Relevant Experience], I believe I would be a valuable addition to your team.\n\n[Your background and why you are interested]\n\nI look forward to discussing how my skills and experience can contribute to [Company].\n\nBest regards,\n[Your Name]', true)

-- 8. Insert sample resumes (uncomment after creating a user)
-- INSERT INTO public.resumes (user_id, name, content, version, is_active) VALUES
--   ('880e8400-e29b-41d4-a716-446655440001', 'Professional Resume', 'John Doe\nSoftware Engineer\n\nExperience:\n- Senior Developer at TechCorp (2020-2023)\n- Full Stack Developer at StartupXYZ (2018-2020)\n\nSkills: JavaScript, React, Node.js, Python', '1.0', true)

-- 9. Insert sample certifications (uncomment after creating a user)
-- INSERT INTO public.certifications (user_id, name, issuer, issue_date, expiry_date, credential_id) VALUES
--   ('880e8400-e29b-41d4-a716-446655440001', 'AWS Certified Solutions Architect', 'Amazon Web Services', '2023-01-15', '2026-01-15', 'AWS-123456'),
--   ('880e8400-e29b-41d4-a716-446655440001', 'Google Cloud Professional Developer', 'Google', '2023-03-20', '2026-03-20', 'GCP-789012')

-- 10. Insert sample job preferences (uncomment after creating a user)
-- INSERT INTO public.job_preferences (user_id, preferred_locations, preferred_sectors, preferred_job_types, preferred_remote_type, min_salary, max_salary, experience_level) VALUES
--   ('880e8400-e29b-41d4-a716-446655440001', ARRAY['San Francisco, CA', 'Remote', 'New York, NY'], ARRAY['550e8400-e29b-41d4-a716-446655440001'], ARRAY['full-time'], 'remote', 100000, 180000, 'senior')

-- Verify the data was inserted correctly
SELECT 'Sectors' as table_name, COUNT(*) as count FROM public.sectors
UNION ALL
SELECT 'Skills' as table_name, COUNT(*) as count FROM public.skills
UNION ALL
SELECT 'Job Posts' as table_name, COUNT(*) as count FROM public.job_posts;

-- Show sample job posts with their sectors
SELECT 
  jp.title,
  jp.company,
  jp.location,
  jp.salary_min,
  jp.salary_max,
  s.name as sector,
  jp.skills
FROM public.job_posts jp
LEFT JOIN public.sectors s ON jp.sector_id = s.id
ORDER BY jp.created_at DESC
LIMIT 10; 