package demos;

class Array3D
{
	public static void main(String args[]) 
	{  
		int a[][][] = { 
						{
							{10, 20, 30},
							{40, 50, 60}
						},
						{
							{70, 80, 90},
							{100, 110, 120, 130, 140, 150}
						}
					};
					
		System.out.println("No of tables is " + a.length );
		System.out.println("No of rows in 0th table is " + a[0].length );
		System.out.println("No of rows in 1st table is " + a[1].length );
		System.out.println("No of columns in 0th table and 0th row is " + a[0][0].length );
		System.out.println("No of columns in 1th table and 1st row is " + a[1][1].length );
		
		for(int t=0; t< a.length; t++)
		{
			for(int r=0; r< a[t].length; r++)
			{
				for(int c=0; c< a[t][r].length; c++)
				{
					System.out.print(a[t][r][c] + "   ");
				}
				System.out.println();
			}
			System.out.println();
		}
	}
}
