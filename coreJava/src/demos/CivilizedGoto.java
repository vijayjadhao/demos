package demos;

class CivilizedGoto
{
	public static void main(String args[])
	{  
		System.out.println(" In main" );
		outer: for	(int i=1; i <=5; i++)
				{
					inner: for	(int j=1; j <=5; j++)
					{
						if(i==j)
						{
							continue inner;
						}
						System.out.println(i + "==" + j);	
					}
				}
		System.out.println(" Exiting main" );	
	}
}