package pl.starchasers.up.security

import org.springframework.security.access.annotation.Secured

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Secured("ROLE_USER", "ROLE_ADMIN")
annotation class IsUser
