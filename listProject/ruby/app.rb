require './list.rb'
list = List.new
list.append(43)
list.append(13)
list.append(24)


list.insert(Link.new(55), 1)

list.getChain()
