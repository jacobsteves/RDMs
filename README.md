[![Logo](http://jacobsteves.ca/images/RDMsLogo.png)]()

A ruby on rails app allowing users to send direct messages to each other facebook messenger style. There is a publish-subscribe observer system in the background, and when a notification is submitted to the server, the system uses JavaScript to update the frontend views.

## Getting Started

### Prerequisites

- We use [Bundler](http://bundler.io/) to track and prepare all our gems.
- [Ruby v2.3.3](https://www.ruby-lang.org/en/news/2016/11/21/ruby-2-3-3-released/)

### Installing

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

## Demo
#### Messaging
[![https://gyazo.com/96b71dd2b9128edfe9c31fff8cd7b0c9](https://i.gyazo.com/96b71dd2b9128edfe9c31fff8cd7b0c9.gif)](https://gyazo.com/96b71dd2b9128edfe9c31fff8cd7b0c9)

#### App
[![https://gyazo.com/bfd05c403d01cce6dfca9c949c9c9f7e](https://i.gyazo.com/bfd05c403d01cce6dfca9c949c9c9f7e.gif)](https://gyazo.com/bfd05c403d01cce6dfca9c949c9c9f7e)

## Built With
- [Ruby v2.3.3](https://www.ruby-lang.org/en/news/2016/11/21/ruby-2-3-3-released/)
- [Rails v4.1.1](https://rubygems.org/gems/rails/versions/4.1.1)
- [Faye](https://faye.jcoglan.com/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RDMs/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
