# create default test user
User.create!(name: "Example User", email: "example@example.com", password: "12345", password_confirmation: "12345")
User.create!(name: "RDM bot", email: "rdm@example.com", password: "12345", password_confirmation: "12345")
