package demos;

class A
{
	private int x = 10;  // 4 bytes
	
	public int getX()
	{
		return x;
	}
	
	public void setX(int x)
	{
		this.x = x;
	}
		
}

class ClassObject1
{
	public static void main(String args[])
	{
		A a1 = new A(); 
		//System.out.println("a1.x = " + a1.x);
		System.out.println("a1.x = " + a1.getX());
		a1.setX(100);
		System.out.println("a1.x = " + a1.getX());
		
	}
	
}