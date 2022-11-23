package demos;

class Return
{
	public static void main(String args[])  //caller method
	{  
		System.out.println(" In main" );
		int i = hello();
		System.out.println(" i = " + i );
		System.out.println(" Exiting main" );
	}
	
	public static int hello()  //called method
	{
		System.out.println(" Hello All" );
		return 10;  //explicit return
	} //implicit return
}

//void means nothing