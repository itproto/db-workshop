variable "public_key_path" {
  description = "Path to the SSH public key to be used for authentication."
  default     = "./temp/key.pem.pub"
}

variable "private_key_path" {
  description = "Path to the SSH private key to be used for authentication."
  default     = "./temp/key.pem"
}

variable "key_name" {
  description = "Desired name of AWS key pair."
  default     = "foo"
}

variable "aws_region" {
  description = "AWS region to launch servers."
  default     = "us-east-1"
}

variable "aws_ami" {
  description = "Amazon Machine Images."
  default     = "ami-0b6b51e397faf2316"
}

variable "aws_type" {
  description = "Amazon Machine Images."
  default     = "t2.micro"
}
