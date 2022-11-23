package demos;

class  CommandLineArgs
{
	public static void main(String args[]) 
	{
		int i = Integer.parseInt(args[0]); 
		int j = Integer.parseInt(args[1]); 
		System.out.println("Sum is=" + (i+j));	
	}
}