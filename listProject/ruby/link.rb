class Link 
  def initialize(data, nexts = nil) 
    @data = data
    @next = nexts
  end

  def getChain() 
    puts getData()
    if getNext() 
      getNext().getChain()
    end
  end

  def getData() 
    return @data;
  end

  def getNext() 
    return @next;
  end

  def setData(data) 
    return @data = data
  end

  def setNext(nexts) 
    return @next = nexts
  end

end
