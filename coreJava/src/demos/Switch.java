package demos;

class Switch
{
	public static void main(String args[])
	{  
		int i=20;
		switch(i)
		{
			case 10:
				System.out.println("value is 10");
				break;
			case 20:
				System.out.println("value is 20");
				break;
			default:
				System.out.println("Non-matching value ");
		}
	}
}