package demos;

class Array2D
{
	public static void main(String args[]) 
	{  
		//asymmetric
		int a[][] = { 
						{10, 20, 30},
						{40, 50, 60, 70, 80},
						{90}
					};
					
		System.out.println("No of rows is " + a.length );
		System.out.println("No of columns in row 0 is " + a[0].length );
		System.out.println("No of columns in row 1 is " + a[1].length );
		System.out.println("No of columns in row 2 is " + a[2].length );
		
		for(int r=0; r< a.length; r++)
		{
			for(int c=0; c< a[r].length; c++)
			{
				System.out.print(a[r][c] + "   ");
			}
			System.out.println();
		}
	}
}
