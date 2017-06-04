# RDMs-RubyDirectMessages
A ruby on rails app allowing users to send direct messages to each other facebook messenger style. 

## Demo
[![https://gyazo.com/5d4b7182e633f595fcc71718392d71f1](https://i.gyazo.com/5d4b7182e633f595fcc71718392d71f1.gif)](https://gyazo.com/5d4b7182e633f595fcc71718392d71f1)

## Local Setup
Clone this repo.
Run the following commands within terminal in this repo folder:

`rvm --default use 2.3.3`

`bundle install`

`gem update system`

`rails s`



In a new terminal tab:

`rackup private_pub.ru -s thin -E production`


Then just travel to localhost:3000 and you're all set up locally.
