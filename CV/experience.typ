#import "cv_functions_industry.typ": lined_section, experience_field

#lined_section("experience")

// #experience_field("Lawrence Berkeley National Laboratory", "Lab Affiliate", "Berkeley, CA", "Aug 2025 - present", list([Developed a Monte Carlo simulation to optimize sensor timing cycles for event coincidence detection],[Studied primary gamma extraction from the Oslo Matrix]))

#experience_field("Lawrence Berkeley National Laboratory", "Lab Affiliate", "Berkeley, CA", "Aug 2025 - present", list([Developed a method for a hexacopter to control the trajectory of a 10m tether-suspended radiation detector],
  [Designed and implemented safety-critical software infrastructure for autonomous systems and outer-loop control algorithms for commanding ArduPilot inner-loop controller],
  [Architected a communication pipeline for GCS, transmitter, companion computer, and Cube Blue flight controller],
[Executed autonomous flight tests at LBNL and Richmond Field Stations under Part 107]))
#experience_field("Lawrence Livermore National Laboratory", "Graduate Intern", "Livermore, CA", "June 2025 - Dec 2025", list(
  [Developed CRISP (CRItical Simulation Pipeline), a Python tool for distributing high-performance computing (HPC) jobs],
// [Test driven Python development included Poetry, CI/CD, SQLite, MPI, CLI, feature branching, and Sphinx],
  [Used 2 world-class LLNL HPC clusters #link("https://hpc.llnl.gov/hardware/compute-platforms/dane")[Dane] and #link("https://hpc.llnl.gov/hardware/compute-platforms/ruby%E2%80%94decommissioned")[Ruby] with Slurm sbatch/srun scripts],
  [CRISP successfully automated compilation and benchmarking workflows for \~3420 reactor simulation cases])) 

#experience_field("Brookhaven National Laboratory", "Student Researcher", "Upton, NY", "Summers 2022 - 2024", list(
  [Developed BRR (Bayesian Resonance Reclassifier) for reclassification tasks on HPC clusters], 
  [Applied machine learning using Scikit-learn to classify nuclear data],
  // [Used Random Matrix Theory for finding and scaling eigenvalues to build synthetic training sets],
  [Used the transport code OpenMC and HPC clusters to parallel process sensitivity analyses for reactor models]))

#experience_field("Truman State University", "Student Astronomy Researcher", "Kirksville, MO", "2021 - 2022", list([Calculated trajectories for \~3000 Starlink satellites to optimize telescope viewing plans and developed a GUI]))
