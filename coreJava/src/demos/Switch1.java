package demos;

class Switch1
{
	public static void main(String args[])
	{  
		int i = 3;
		switch(i*2+1)
		{
			case 3:
			case 4:
			case 5:
			case 6:
				System.out.println("Summer");
				break;
			case 7:
			case 8:
			case 9:
			case 10:
				System.out.println("Rainy");
				break;
			case 11:
			case 12:
			case 1:
			case 2:
				System.out.println("Winter");
				break;
			default:
				System.out.println("Not a valid month");
		}
		
	}
}