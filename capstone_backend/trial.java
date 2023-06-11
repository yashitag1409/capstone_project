import java.util.Scanner;  

class Vikas {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[] arr = new int[n];
        int [] sumArr = new int[n];
        int i  = 0,d ,sum  = 0;
        for(i = 0 ; i < n ; i ++){
            arr[i] = sc.nextInt();
        }
        for(i = 0 ; i< n ; i++){
            sum = 0;
            while(arr[i] > 0){
                d = arr[i]%10;
                sum += d;
                arr[i] = arr[i] / 10;
            }
            sumArr[i] = sum;
        }
for(i = 0; i < n ; i++){
    System.out.print(sumArr[i]);

}
    }
} 