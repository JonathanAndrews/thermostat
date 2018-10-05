require 'sinatra'


class ThermostatApp < Sinatra::Base

  enable :sessions

  get '/' do
    p "this the index"
    erb :index
  end

  post '/temp' do
    # headers 'Access-Control-Allow-Origin' => '*'
    puts "this is the post"
    p params
    session[:set_temp] = params["temp"]
  end

  get '/temp' do
    p "this is the get"
    p session[:set_temp]
    session[:set_temp]
  end
end
