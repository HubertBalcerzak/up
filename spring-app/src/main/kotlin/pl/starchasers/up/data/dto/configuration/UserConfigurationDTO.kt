package pl.starchasers.up.data.dto.configuration

class UserConfigurationDTO(
    /**
     * Maximum allowed temporary file size, in bytes
     */
    val maxTemporaryFileSize: Long,
    /**
     * Maximum allowed time, after which temporary file will be deleted. 0 means no limit
     */
    val maxFileLifetime: Long,
    /**
     * Default time, after which temporary file will be deleted, if not specified
     */
    val defaultFileLifetime: Long,
    /**
     * Whether current user is allowed to upload permanent files
     */
    val permanentAllowed: Boolean,
    /**
     * Maximum allowed permanent file size, in bytes
     */
    val maxPermanentFileSize: Long
)
