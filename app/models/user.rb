class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :conversations, :foreign_key => :sender_id

  after_create :create_default_conversation

  private

  # Demo purposes, if implementing into your own project
  #     You can remove this/add to it if you want

  def create_default_conversation
    Conversation.create(sender_id: 1, recipient_id: self.id) unless self.id  == 1
  end
end
