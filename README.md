# RDMs
A ruby on rails app allowing users to send direct messages to each other facebook messenger style. 

## Demo
[![https://gyazo.com/96b71dd2b9128edfe9c31fff8cd7b0c9](https://i.gyazo.com/96b71dd2b9128edfe9c31fff8cd7b0c9.gif)](https://gyazo.com/96b71dd2b9128edfe9c31fff8cd7b0c9)

## Local Setup
Clone this repo.
Run the following commands within terminal in this repo folder:

`bundle install`

`gem update system`

`rails s`

<br>

In a new terminal tab:

`rackup private_pub.ru -s thin -E production`

This will set up the [faye](https://faye.jcoglan.com/) server.

<br>

If you're running into problems, run:

`rvm --default use 2.3.3`

to set the default ruby version. 

<br>

Then just travel to localhost:3000 and you're all set up locally.
