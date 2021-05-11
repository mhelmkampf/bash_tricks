#!/bin/bash

#SBATCH --job-name=loop
#SBATCH --partition=carl.p
#SBATCH --nodes=1                    
#SBATCH --ntasks=1                  
#SBATCH --mem=2G                  
#SBATCH --time=0-1:00  # D-HH or HH:MM              
#SBATCH --output=sl_%j.out        
#SBATCH --error=sl_%j.err          

for i in {1..10}
do
  echo $RANDOM >> random_numbers.txt
done
