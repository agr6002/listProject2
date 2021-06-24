 require "./link.rb"

class List 
  def initialize() 
    @tail = nil
    @head = nil
    @current = nil
  end

  def getHead() 
    return @head
  end

  def getTail() 
    return @tail
  end

  def getChain()
    if @head == nil
      puts "Chain Empty"
    else
      @head.getChain()
    end
  end

  def append(data) 
    if @tail
      @tail = @tail.setNext( Link.new(data) )
    elsif 
      @head = Link.new(data)
      @tail = @head
      @current = @head
    end
  end

  def clear() 
    # element = @head
    # ognext = element
    # while element != nil 
    #   ognext = element.getNext()
    #   element.setNext(nil)
    #   element = ognext
    # end
    @head = nil
    @foot = nil
    @current = nil
  end

  def currPos(element = @current) 
    notFound = true
    p = 0
    test = @head
    while notFound 
      if test = element
        return p
      elsif p >= length() || element == nil
        return flase
      end
      test = test.getNext()
      p += 1
    end
  end

  def getValue() 
    @current
  end


  def elementAtPos(pos) 
    element = @head
    if pos == 0
      return element
    else
      (pos).times() do
        if element == nil
          return element
        end
        element = element.getNext()
      end
      element
    end
  end

  def insertCurr(item, element = @current) 
    insert(item, currPos(element))
  end

  def insert(item, pos) 
    if length() < pos && pos < 0 
      return false
    end
    if pos != 0 && pos < length() - 1
      element = elementAtPos(pos - 1)
      ogNext = element.getNext()
      element.setNext(item)
      item.setNext(ogNext)
    elsif pos != 0 
      elementAtPos(pos - 1).setNext(item)
    else 
      item.setNext(@head)
      @head = item
    end
  end

  def length() 
    len = 1
    current = @head
    while current != @tail 
      len += 1
      current = current.getNext()
    end
    len
  end

  def moveToEnd(element = @current) 
    remove(element)
    insert(element, @length)
  end

  def moveToPos(pos, element = @current) 
    remove(element)
    insert(element, pos)
  end

  def moveToStart(element = @current) 
    remove(element)
    insert(element, 0)
  end

  def next() 
    if !@current.getNext() 
      return @current
    else 
      return (@current = @current.getNext())
    end
  end

  def prev() 
    if !elementAtPos(currPos(@current) - 1) 
      return @current
   else 
      return (@current = elementAtPos(currPos(@current) - 1))
    end
  end

  def remove(element = @current) 
    e1 = elementAtPos(currPos(element) - 1)
    e2 = elementAtPos(currPos(element) + 1)
    e1.setNext(e2)
  end
end
